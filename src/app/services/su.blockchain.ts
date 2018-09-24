import { Asset } from './org.hyperledger.composer.system';
import { Participant } from './org.hyperledger.composer.system';
import { Transaction } from './org.hyperledger.composer.system';

export class ManagementParticipant extends Participant {
    id: string;
    name: string;
    email: string;
}

export class ManagementProposal extends Asset {
    id: string;
    creator: ManagementParticipant;

    header: string;
    body: string;

    country: string;
    city: string;
    district: string;

    approved: number;
    rejected: number;
    abstained: number;
}

export class ManagementTransaction extends Transaction {
    creator: ManagementParticipant;
    asset: ManagementProposal;
    type: ManagementTransactionType;
}

export enum ManagementTransactionType {
    APPROVE,
    REJECT,
    ABSTAIN,
}
