class RemoveDobFromContacts < ActiveRecord::Migration
  def change
    remove_column :contacts, :dob, :date
  end
end
