class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :firstname
      t.string :lastname
      t.string :dob
      t.string :phone
      t.string :email
      t.text :notes

      t.timestamps null: false
    end
  end
end
