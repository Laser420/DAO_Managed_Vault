/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface AirdropInterface extends utils.Interface {
  functions: {
    "authorize(address)": FunctionFragment;
    "authorized(address)": FunctionFragment;
    "claim(uint256,uint256,bytes32[],address)": FunctionFragment;
    "claimAndDelegate(uint256,address,uint256,bytes32[],address)": FunctionFragment;
    "claimed(address)": FunctionFragment;
    "deauthorize(address)": FunctionFragment;
    "expiration()": FunctionFragment;
    "isAuthorized(address)": FunctionFragment;
    "lockingVault()": FunctionFragment;
    "owner()": FunctionFragment;
    "reclaim(address)": FunctionFragment;
    "rewardsRoot()": FunctionFragment;
    "setOwner(address)": FunctionFragment;
    "token()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "authorize"
      | "authorize(address)"
      | "authorized"
      | "authorized(address)"
      | "claim"
      | "claim(uint256,uint256,bytes32[],address)"
      | "claimAndDelegate"
      | "claimAndDelegate(uint256,address,uint256,bytes32[],address)"
      | "claimed"
      | "claimed(address)"
      | "deauthorize"
      | "deauthorize(address)"
      | "expiration"
      | "expiration()"
      | "isAuthorized"
      | "isAuthorized(address)"
      | "lockingVault"
      | "lockingVault()"
      | "owner"
      | "owner()"
      | "reclaim"
      | "reclaim(address)"
      | "rewardsRoot"
      | "rewardsRoot()"
      | "setOwner"
      | "setOwner(address)"
      | "token"
      | "token()",
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "authorize",
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: "authorize(address)",
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: "authorized",
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: "authorized(address)",
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: "claim",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<string>,
    ],
  ): string;
  encodeFunctionData(
    functionFragment: "claim(uint256,uint256,bytes32[],address)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<string>,
    ],
  ): string;
  encodeFunctionData(
    functionFragment: "claimAndDelegate",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<string>,
    ],
  ): string;
  encodeFunctionData(
    functionFragment: "claimAndDelegate(uint256,address,uint256,bytes32[],address)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<string>,
    ],
  ): string;
  encodeFunctionData(
    functionFragment: "claimed",
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: "claimed(address)",
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: "deauthorize",
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: "deauthorize(address)",
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: "expiration",
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: "expiration()",
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: "isAuthorized",
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: "isAuthorized(address)",
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: "lockingVault",
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: "lockingVault()",
    values?: undefined,
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "reclaim",
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: "reclaim(address)",
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: "rewardsRoot",
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: "rewardsRoot()",
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: "setOwner",
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: "setOwner(address)",
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(functionFragment: "token()", values?: undefined): string;

  decodeFunctionResult(functionFragment: "authorize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "authorize(address)",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "authorized", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "authorized(address)",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claim(uint256,uint256,bytes32[],address)",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimAndDelegate",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimAndDelegate(uint256,address,uint256,bytes32[],address)",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "claimed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimed(address)",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "deauthorize",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "deauthorize(address)",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "expiration", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "expiration()",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAuthorized",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAuthorized(address)",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "lockingVault",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "lockingVault()",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "reclaim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "reclaim(address)",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardsRoot",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardsRoot()",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setOwner(address)",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token()", data: BytesLike): Result;

  events: {};
}

export interface Airdrop extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AirdropInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>,
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>,
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    authorize(
      who: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    "authorize(address)"(
      who: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    authorized(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;

    "authorized(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;

    claim(
      amount: PromiseOrValue<BigNumberish>,
      totalGrant: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      destination: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    "claim(uint256,uint256,bytes32[],address)"(
      amount: PromiseOrValue<BigNumberish>,
      totalGrant: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      destination: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    claimAndDelegate(
      amount: PromiseOrValue<BigNumberish>,
      delegate: PromiseOrValue<string>,
      totalGrant: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      destination: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    "claimAndDelegate(uint256,address,uint256,bytes32[],address)"(
      amount: PromiseOrValue<BigNumberish>,
      delegate: PromiseOrValue<string>,
      totalGrant: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      destination: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    claimed(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    "claimed(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    deauthorize(
      who: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    "deauthorize(address)"(
      who: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    expiration(overrides?: CallOverrides): Promise<[BigNumber]>;

    "expiration()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    isAuthorized(
      who: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;

    "isAuthorized(address)"(
      who: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;

    lockingVault(overrides?: CallOverrides): Promise<[string]>;

    "lockingVault()"(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    reclaim(
      destination: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    "reclaim(address)"(
      destination: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    rewardsRoot(overrides?: CallOverrides): Promise<[string]>;

    "rewardsRoot()"(overrides?: CallOverrides): Promise<[string]>;

    setOwner(
      who: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    "setOwner(address)"(
      who: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    token(overrides?: CallOverrides): Promise<[string]>;

    "token()"(overrides?: CallOverrides): Promise<[string]>;
  };

  authorize(
    who: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  "authorize(address)"(
    who: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  authorized(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  "authorized(address)"(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  claim(
    amount: PromiseOrValue<BigNumberish>,
    totalGrant: PromiseOrValue<BigNumberish>,
    merkleProof: PromiseOrValue<BytesLike>[],
    destination: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  "claim(uint256,uint256,bytes32[],address)"(
    amount: PromiseOrValue<BigNumberish>,
    totalGrant: PromiseOrValue<BigNumberish>,
    merkleProof: PromiseOrValue<BytesLike>[],
    destination: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  claimAndDelegate(
    amount: PromiseOrValue<BigNumberish>,
    delegate: PromiseOrValue<string>,
    totalGrant: PromiseOrValue<BigNumberish>,
    merkleProof: PromiseOrValue<BytesLike>[],
    destination: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  "claimAndDelegate(uint256,address,uint256,bytes32[],address)"(
    amount: PromiseOrValue<BigNumberish>,
    delegate: PromiseOrValue<string>,
    totalGrant: PromiseOrValue<BigNumberish>,
    merkleProof: PromiseOrValue<BytesLike>[],
    destination: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  claimed(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  "claimed(address)"(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  deauthorize(
    who: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  "deauthorize(address)"(
    who: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  expiration(overrides?: CallOverrides): Promise<BigNumber>;

  "expiration()"(overrides?: CallOverrides): Promise<BigNumber>;

  isAuthorized(
    who: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  "isAuthorized(address)"(
    who: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  lockingVault(overrides?: CallOverrides): Promise<string>;

  "lockingVault()"(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  reclaim(
    destination: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  "reclaim(address)"(
    destination: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  rewardsRoot(overrides?: CallOverrides): Promise<string>;

  "rewardsRoot()"(overrides?: CallOverrides): Promise<string>;

  setOwner(
    who: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  "setOwner(address)"(
    who: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  token(overrides?: CallOverrides): Promise<string>;

  "token()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    authorize(
      who: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    "authorize(address)"(
      who: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    authorized(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    "authorized(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    claim(
      amount: PromiseOrValue<BigNumberish>,
      totalGrant: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      destination: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    "claim(uint256,uint256,bytes32[],address)"(
      amount: PromiseOrValue<BigNumberish>,
      totalGrant: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      destination: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    claimAndDelegate(
      amount: PromiseOrValue<BigNumberish>,
      delegate: PromiseOrValue<string>,
      totalGrant: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      destination: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    "claimAndDelegate(uint256,address,uint256,bytes32[],address)"(
      amount: PromiseOrValue<BigNumberish>,
      delegate: PromiseOrValue<string>,
      totalGrant: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      destination: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    claimed(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    "claimed(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    deauthorize(
      who: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    "deauthorize(address)"(
      who: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    expiration(overrides?: CallOverrides): Promise<BigNumber>;

    "expiration()"(overrides?: CallOverrides): Promise<BigNumber>;

    isAuthorized(
      who: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    "isAuthorized(address)"(
      who: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    lockingVault(overrides?: CallOverrides): Promise<string>;

    "lockingVault()"(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    reclaim(
      destination: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    "reclaim(address)"(
      destination: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    rewardsRoot(overrides?: CallOverrides): Promise<string>;

    "rewardsRoot()"(overrides?: CallOverrides): Promise<string>;

    setOwner(
      who: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    "setOwner(address)"(
      who: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    token(overrides?: CallOverrides): Promise<string>;

    "token()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    authorize(
      who: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    "authorize(address)"(
      who: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    authorized(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    "authorized(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    claim(
      amount: PromiseOrValue<BigNumberish>,
      totalGrant: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      destination: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    "claim(uint256,uint256,bytes32[],address)"(
      amount: PromiseOrValue<BigNumberish>,
      totalGrant: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      destination: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    claimAndDelegate(
      amount: PromiseOrValue<BigNumberish>,
      delegate: PromiseOrValue<string>,
      totalGrant: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      destination: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    "claimAndDelegate(uint256,address,uint256,bytes32[],address)"(
      amount: PromiseOrValue<BigNumberish>,
      delegate: PromiseOrValue<string>,
      totalGrant: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      destination: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    claimed(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    "claimed(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    deauthorize(
      who: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    "deauthorize(address)"(
      who: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    expiration(overrides?: CallOverrides): Promise<BigNumber>;

    "expiration()"(overrides?: CallOverrides): Promise<BigNumber>;

    isAuthorized(
      who: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    "isAuthorized(address)"(
      who: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    lockingVault(overrides?: CallOverrides): Promise<BigNumber>;

    "lockingVault()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    reclaim(
      destination: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    "reclaim(address)"(
      destination: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    rewardsRoot(overrides?: CallOverrides): Promise<BigNumber>;

    "rewardsRoot()"(overrides?: CallOverrides): Promise<BigNumber>;

    setOwner(
      who: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    "setOwner(address)"(
      who: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    "token()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    authorize(
      who: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    "authorize(address)"(
      who: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    authorized(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    "authorized(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    claim(
      amount: PromiseOrValue<BigNumberish>,
      totalGrant: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      destination: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    "claim(uint256,uint256,bytes32[],address)"(
      amount: PromiseOrValue<BigNumberish>,
      totalGrant: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      destination: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    claimAndDelegate(
      amount: PromiseOrValue<BigNumberish>,
      delegate: PromiseOrValue<string>,
      totalGrant: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      destination: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    "claimAndDelegate(uint256,address,uint256,bytes32[],address)"(
      amount: PromiseOrValue<BigNumberish>,
      delegate: PromiseOrValue<string>,
      totalGrant: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      destination: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    claimed(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    "claimed(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    deauthorize(
      who: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    "deauthorize(address)"(
      who: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    expiration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "expiration()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isAuthorized(
      who: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    "isAuthorized(address)"(
      who: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    lockingVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lockingVault()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    reclaim(
      destination: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    "reclaim(address)"(
      destination: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    rewardsRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "rewardsRoot()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setOwner(
      who: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    "setOwner(address)"(
      who: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "token()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}