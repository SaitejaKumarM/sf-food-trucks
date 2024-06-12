defmodule SFFoodTrucks.API do
  @moduledoc """
  Web API for food trucks.
  """

  use Plug.Router
  alias SFFoodTrucks.Repo

  plug :match
  plug :dispatch

  @doc """
  Start the Plug adapter.
  """
  def start do
    {:ok, _} = Plug.Cowboy.http(SFFoodTrucks.API, [])
  end

  get "/food_trucks" do
    food_trucks = Repo.load_food_trucks()
    send_resp(conn, 200, Poison.encode!(food_trucks))
  end

  match _ do
    send_resp(conn, 404, "Not Found")
  end
end
