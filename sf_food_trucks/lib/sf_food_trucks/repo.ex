defmodule SFFoodTrucks.Repo do
  @moduledoc """
  Module to handle data loading and manipulation.
  """

  alias SFFoodTrucks.FoodTruck

  @data_file "priv/data/Mobile_Food_Facility_Permit.csv"

  @doc """
  Load food trucks from CSV file.
  """
  def load_food_trucks do
    @data_file
    |> File.stream!()
    |> Stream.drop(1)
    |> Stream.map(&FoodTruck.from_csv/1)
    |> Enum.to_list()
  end
end
