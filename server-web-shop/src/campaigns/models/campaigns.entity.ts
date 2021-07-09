import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class CampaignsEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
   
}