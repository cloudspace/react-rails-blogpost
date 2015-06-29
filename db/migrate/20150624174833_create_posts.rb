class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :topic
      t.string :content
      t.string :title

      t.timestamps null: false
    end
  end
end
