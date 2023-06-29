class AddColumnsToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :username, :string
    add_column :users, :total_lines, :integer, default: 0
    add_column :users, :junior_developers, :integer, default: 0
    add_column :users, :senior_developers, :integer, default: 0
    add_column :users, :startups, :integer, default: 0
    add_column :users, :companies, :integer, default: 0
    add_column :users, :big_techs, :integer, default: 0
    add_column :users, :AIs, :integer, default: 0
    add_column :users, :quantum_computers, :integer, default: 0
    add_column :users, :coding_stars, :integer, default: 0
    add_column :users, :architects, :integer, default: 0
  end
end
