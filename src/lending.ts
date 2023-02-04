import {
  Claim as ClaimEvent,
  Deposit as DepositEvent,
  Initialized as InitializedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Paused as PausedEvent,
  Unpaused as UnpausedEvent,
  Withdraw as WithdrawEvent,
} from "../generated/Lending/Lending";
import {
  Claim,
  Deposit,
  Initialized,
  OwnershipTransferred,
  Paused,
  Unpaused,
  Withdraw,
  Order,
} from "../generated/schema";

export function handleClaim(event: ClaimEvent): void {
  let entity = new Claim(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.owner = event.params.owner;
  entity.amount = event.params.amount;
  entity.info_orderId = event.params.info.orderId;
  entity.info_packageId = event.params.info.packageId;
  entity.info_period = event.params.info.period;
  entity.info_amount = event.params.info.amount;
  entity.info_amountClaimed = event.params.info.amountClaimed;
  entity.info_timeStart = event.params.info.timeStart;
  entity.info_timeClaim = event.params.info.timeClaim;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  let order = Order.load(
    event.params.owner.toHex() + event.params.info.orderId.toString()
  );

  if (!order) {
    order = new Order(
      event.params.owner.toHex() + event.params.info.orderId.toString()
    );
  }

  order.info_amountClaimed = event.params.info.amountClaimed;
  order.info_timeClaim = event.params.info.timeClaim;
  order.blockNumber = event.block.number;
  order.blockTimestamp = event.block.timestamp;

  order.save();
}

export function handleDeposit(event: DepositEvent): void {
  let entity = new Deposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.owner = event.params.owner;
  entity.info_orderId = event.params.info.orderId;
  entity.info_packageId = event.params.info.packageId;
  entity.info_period = event.params.info.period;
  entity.info_amount = event.params.info.amount;
  entity.info_amountClaimed = event.params.info.amountClaimed;
  entity.info_timeStart = event.params.info.timeStart;
  entity.info_timeClaim = event.params.info.timeClaim;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  let order = Order.load(
    event.params.owner.toHex() + event.params.info.orderId.toString()
  );

  if (!order) {
    order = new Order(
      event.params.owner.toHex() + event.params.info.orderId.toString()
    );
  }

  order.owner = event.params.owner;
  order.info_orderId = event.params.info.orderId;
  order.info_packageId = event.params.info.packageId;
  order.info_period = event.params.info.period;
  order.info_amount = event.params.info.amount;
  order.info_amountClaimed = event.params.info.amountClaimed;
  order.info_timeStart = event.params.info.timeStart;
  order.info_timeClaim = event.params.info.timeClaim;

  order.blockNumber = event.block.number;
  order.blockTimestamp = event.block.timestamp;

  order.save();
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.version = event.params.version;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.previousOwner = event.params.previousOwner;
  entity.newOwner = event.params.newOwner;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.account = event.params.account;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.account = event.params.account;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleWithdraw(event: WithdrawEvent): void {
  let entity = new Withdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.owner = event.params.owner;
  entity.amount = event.params.amount;
  entity.info_orderId = event.params.info.orderId;
  entity.info_packageId = event.params.info.packageId;
  entity.info_period = event.params.info.period;
  entity.info_amount = event.params.info.amount;
  entity.info_amountClaimed = event.params.info.amountClaimed;
  entity.info_timeStart = event.params.info.timeStart;
  entity.info_timeClaim = event.params.info.timeClaim;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  let order = Order.load(
    event.params.owner.toHex() + event.params.info.orderId.toString()
  );

  if (!order) {
    order = new Order(
      event.params.owner.toHex() + event.params.info.orderId.toString()
    );
  }

  order.info_amount = event.params.info.amount; // == 0
  order.info_amountClaimed = event.params.info.amountClaimed;
  order.info_timeClaim = event.params.info.timeClaim;

  order.blockNumber = event.block.number;
  order.blockTimestamp = event.block.timestamp;
}
