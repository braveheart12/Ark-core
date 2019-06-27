import ByteBuffer from "bytebuffer";
import { TransactionTypes } from "../../enums";
import { ISerializeOptions } from "../../interfaces";
import { Base58, BigNumber } from "../../utils";
import * as schemas from "./schemas";
import { Transaction } from "./transaction";

export class HtlcLockTransaction extends Transaction {
    public static type: TransactionTypes = TransactionTypes.HtlcLock;

    public static getSchema(): schemas.TransactionSchema {
        return schemas.htlcLock;
    }

    public serialize(options?: ISerializeOptions): ByteBuffer {
        const { data } = this;

        const buffer: ByteBuffer = new ByteBuffer(8 + 32 + 8 + 21, true);

        buffer.writeUint64(+data.amount);
        buffer.append(Buffer.from(data.asset.lock.secretHash, "hex"));
        buffer.writeUint64(data.asset.lock.expiration);
        buffer.append(Base58.decodeCheck(data.recipientId));

        return buffer;
    }

    public deserialize(buf: ByteBuffer): void {
        const { data } = this;

        const amount = BigNumber.make(buf.readUint64().toString());
        const secretHash: string = buf.readBytes(32).toString("hex");
        const expiration: number = buf.readUint64().toNumber();
        const recipientId = Base58.encodeCheck(buf.readBytes(21).toBuffer());

        data.amount = amount;
        data.recipientId = recipientId;
        data.asset = {
            lock: {
                secretHash,
                expiration,
            },
        };
    }
}