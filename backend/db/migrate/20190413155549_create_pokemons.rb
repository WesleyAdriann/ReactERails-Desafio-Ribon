class CreatePokemons < ActiveRecord::Migration[5.1]
  def change
    create_table :pokemons do |t|
      t.string :nome
      t.string :imagem
      t.string :evochain
      t.string :tipo0
      t.string :tipo1

      t.timestamps
    end
  end
end
