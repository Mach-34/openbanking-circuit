
/* Autogenerated file, do not edit! */

/* eslint-disable */
import {
  type AbiType,
  AztecAddress,
  type AztecAddressLike,
  CompleteAddress,
  Contract,
  type ContractArtifact,
  ContractBase,
  ContractFunctionInteraction,
  type ContractInstanceWithAddress,
  type ContractMethod,
  type ContractStorageLayout,
  type ContractNotes,
  decodeFromAbi,
  DeployMethod,
  EthAddress,
  type EthAddressLike,
  EventSelector,
  type FieldLike,
  Fr,
  type FunctionSelectorLike,
  L1EventPayload,
  loadContractArtifact,
  type NoirCompiledContract,
  NoteSelector,
  Point,
  type PublicKey,
  PublicKeys,
  type UnencryptedL2Log,
  type Wallet,
  type U128Like,
  type WrappedFieldLike,
} from '@aztec/aztec.js';
import OpenbankingEscrowContractArtifactJson from './openbanking_escrow.json' with { type: 'json' };
export const OpenbankingEscrowContractArtifact = loadContractArtifact(OpenbankingEscrowContractArtifactJson as NoirCompiledContract);



/**
 * Type-safe interface for contract OpenbankingEscrow;
 */
export class OpenbankingEscrowContract extends ContractBase {
  
  private constructor(
    instance: ContractInstanceWithAddress,
    wallet: Wallet,
  ) {
    super(instance, OpenbankingEscrowContractArtifact, wallet);
  }
  

  
  /**
   * Creates a contract instance.
   * @param address - The deployed contract's address.
   * @param wallet - The wallet to use when interacting with the contract.
   * @returns A promise that resolves to a new Contract instance.
   */
  public static async at(
    address: AztecAddress,
    wallet: Wallet,
  ) {
    return Contract.at(address, OpenbankingEscrowContract.artifact, wallet) as Promise<OpenbankingEscrowContract>;
  }

  
  /**
   * Creates a tx to deploy a new instance of this contract.
   */
  public static deploy(wallet: Wallet, token_address: AztecAddressLike, key_hashes: FieldLike[]) {
    return new DeployMethod<OpenbankingEscrowContract>(PublicKeys.default(), wallet, OpenbankingEscrowContractArtifact, OpenbankingEscrowContract.at, Array.from(arguments).slice(1));
  }

  /**
   * Creates a tx to deploy a new instance of this contract using the specified public keys hash to derive the address.
   */
  public static deployWithPublicKeys(publicKeys: PublicKeys, wallet: Wallet, token_address: AztecAddressLike, key_hashes: FieldLike[]) {
    return new DeployMethod<OpenbankingEscrowContract>(publicKeys, wallet, OpenbankingEscrowContractArtifact, OpenbankingEscrowContract.at, Array.from(arguments).slice(2));
  }

  /**
   * Creates a tx to deploy a new instance of this contract using the specified constructor method.
   */
  public static deployWithOpts<M extends keyof OpenbankingEscrowContract['methods']>(
    opts: { publicKeys?: PublicKeys; method?: M; wallet: Wallet },
    ...args: Parameters<OpenbankingEscrowContract['methods'][M]>
  ) {
    return new DeployMethod<OpenbankingEscrowContract>(
      opts.publicKeys ?? PublicKeys.default(),
      opts.wallet,
      OpenbankingEscrowContractArtifact,
      OpenbankingEscrowContract.at,
      Array.from(arguments).slice(1),
      opts.method ?? 'constructor',
    );
  }
  

  
  /**
   * Returns this contract's artifact.
   */
  public static get artifact(): ContractArtifact {
    return OpenbankingEscrowContractArtifact;
  }
  

  public static get storage(): ContractStorageLayout<'config' | 'escrow_owners' | 'escrow_balances' | 'pubkey_registry'> {
      return {
        config: {
      slot: new Fr(1n),
    },
escrow_owners: {
      slot: new Fr(4n),
    },
escrow_balances: {
      slot: new Fr(5n),
    },
pubkey_registry: {
      slot: new Fr(6n),
    }
      } as ContractStorageLayout<'config' | 'escrow_owners' | 'escrow_balances' | 'pubkey_registry'>;
    }
    

  public static get notes(): ContractNotes<'UintNote' | 'EscrowOwnerNote'> {
    return {
      UintNote: {
          id: new NoteSelector(0),
        },
EscrowOwnerNote: {
          id: new NoteSelector(1),
        }
    } as ContractNotes<'UintNote' | 'EscrowOwnerNote'>;
  }
  

  /** Type-safe wrappers for the public methods exposed by the contract. */
  public declare methods: {
    
    /** add_key_hashes(key_hashes: array) */
    add_key_hashes: ((key_hashes: FieldLike[]) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** check_verify_payload(payload: struct) */
    check_verify_payload: ((payload: { signature_limbs: FieldLike[], modulus_limbs: FieldLike[], redc_limbs: FieldLike[], partial_hash_start: (bigint | number)[], header_delimiter_index: (bigint | number), payload: (bigint | number)[], payload_length: (bigint | number) }) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** compute_note_hash_and_optionally_a_nullifier(contract_address: struct, nonce: field, storage_slot: field, note_type_id: field, compute_nullifier: boolean, packed_note_content: array) */
    compute_note_hash_and_optionally_a_nullifier: ((contract_address: AztecAddressLike, nonce: FieldLike, storage_slot: FieldLike, note_type_id: FieldLike, compute_nullifier: boolean, packed_note_content: FieldLike[]) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** constructor(token_address: struct, key_hashes: array) */
    constructor: ((token_address: AztecAddressLike, key_hashes: FieldLike[]) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** get_escrow_liqudity_position(commitment: field) */
    get_escrow_liqudity_position: ((commitment: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** get_escrow_liqudity_position_page(commitments: struct) */
    get_escrow_liqudity_position_page: ((commitments: { storage: FieldLike[], len: (bigint | number) }) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** get_escrow_owner_note(scope: struct) */
    get_escrow_owner_note: ((scope: AztecAddressLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** increment_escrow_balance(amount: struct) */
    increment_escrow_balance: ((amount: U128Like) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** init_escrow_balance(sort_code: field, currency_code: field, amount: struct, randomness: field) */
    init_escrow_balance: ((sort_code: FieldLike, currency_code: FieldLike, amount: U128Like, randomness: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** process_log(log_plaintext: struct, tx_hash: field, unique_note_hashes_in_tx: struct, first_nullifier_in_tx: field, recipient: struct) */
    process_log: ((log_plaintext: { storage: FieldLike[], len: (bigint | number) }, tx_hash: FieldLike, unique_note_hashes_in_tx: { storage: FieldLike[], len: (bigint | number) }, first_nullifier_in_tx: FieldLike, recipient: AztecAddressLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** prompt_withdraw_escrow_balance(amount: struct) */
    prompt_withdraw_escrow_balance: ((amount: U128Like) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** prove_payment_and_claim(openbanking_params: struct) */
    prove_payment_and_claim: ((openbanking_params: { signature_limbs: FieldLike[], modulus_limbs: FieldLike[], redc_limbs: FieldLike[], partial_hash_start: (bigint | number)[], header_delimiter_index: (bigint | number), payload: (bigint | number)[], payload_length: (bigint | number) }) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** public_dispatch(selector: field) */
    public_dispatch: ((selector: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** sync_notes() */
    sync_notes: (() => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** withdraw_escrow_balance(amount: struct) */
    withdraw_escrow_balance: ((amount: U128Like) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;
  };

  
}
