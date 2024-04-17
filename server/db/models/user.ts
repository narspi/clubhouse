import { Model, DataTypes } from "sequelize";
import sequelize from "../core";

interface UserAttributes {
  id: number;
  fullName: string;
  avatarUrl: string;
  isActive?: number;
  userName?: string;
  phone?: string;
}

class User extends Model<UserAttributes> implements UserAttributes {
  public id!: number;
  public fullName!: string;
  public avatarUrl!: string;
  public isActive?: number;
  public userName?: string;
  public phone?: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avatarUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isActive: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: true,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    tableName: "users",
  }
);

export default User;
