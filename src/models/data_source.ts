import "reflect-metadata"
import { DataSource } from "typeorm"
import { Projeto, Usuario } from "./model"

export const MariaDBDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "fatec",
    database: "web_orm_insert_ts",
    synchronize: true,
    logging: false,
    entities: [Projeto, Usuario],
    migrations: [],
    subscribers: [],
})




