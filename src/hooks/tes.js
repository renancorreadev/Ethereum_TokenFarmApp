export const useUnstake = () => {
  const USDAddress = "0x47030934CBDe02de3C4C21D501eF6b3aFc64a9BC";
  const FarmAddress = "0x346307bf6E618E2E8B33a92E87dF909e795cAeb9";

  const contractUSD = useUSDT(USDAddress, BEP20USDT.abi);
  const ContractFarm = useSheepStake(FarmAddress, SHEEPSTAKE_ABI.abi);

  const [UnstakeBalance, setUnstakeBalance] = useState(ZERO_BALANCE);
  const [UnstakeState, setUnstakeState] = useState(STATE.IDLE);
  const [isUnstake, setIsUnstake] = useState(false);

  const { account } = useWeb3();

  const fetchStakeBalance = async () => {
    if (USDAddress === ZERO_ADDRESS) {
      setIsUnstake(true);
      return;
    }
    try {
      setUnstakeBalance(approveBal);
      setIsUnstake(
        approveBal.gte(
          new BigNumber(requiredApprovedBalance ? requiredApprovedBalance : 1)
        )
      );
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (account && ContractFarm) {
      fetchStakeBalance();
    }
  }, [account, ContractFarm]);

  const unstake = async (amount) => {
    try {
      setUnstakeState(STATE.BUSY);
      contractUSD.options.address =
        "0x47030934CBDe02de3C4C21D501eF6b3aFc64a9BC";
      ContractFarm.options.address =
        "0x346307bf6E618E2E8B33a92E87dF909e795cAeb9";

      await ContractFarm.methods
        .stakeTokens(amount)
        .send({ from: account })
        .on("transactionHash", (hash) => {});

      await fetchStakeBalance();

      setUnstakeState(STATE.SUCCEED);
    } catch (e) {
      console.log(e);
      setUnstakeState(STATE.FAILED);
    }
  };

  return { UnstakeBalance, isUnstake, UnstakeState, unstake };
};
