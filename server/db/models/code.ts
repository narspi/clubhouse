import sequelize from "../core";
import { Model, DataTypes } from "sequelize";

interface CodeAttributes {
  code: string;
  user_id: number;
}

class Code extends Model<CodeAttributes> implements CodeAttributes {
  public code!: string;
  public user_id!: number;
}

Code.init(
  {
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "code",
  }
);

export default Code;
