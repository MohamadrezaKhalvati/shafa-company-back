

import { createConnection, Connection } from 'mysql';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DbConnection {
  private connection: Connection;

  constructor() {
    this.connection = createConnection({
      host: 'localhost',
      user: 'root',
      password: 'aziz6882',
      database: 'databasereport',
    });

    this.connection.connect();
  }

  getConnection(): Connection {
    return this.connection;
  }
}
