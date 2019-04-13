class PokemonSerializer < ActiveModel::Serializer
  attributes :id, :nome, :imagem, :evochain, :tipo0, :tipo1
end
