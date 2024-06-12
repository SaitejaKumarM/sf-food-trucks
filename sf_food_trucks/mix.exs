defmodule SFFoodTrucks.MixProject do
  use Mix.Project

  def project do
    [
      app: :sf_food_trucks,
      version: "0.1.0",
      elixir: "~> 1.11",
      start_permanent: Mix.env() == :prod,
      deps: deps()
    ]
  end

  def application do
    [
      mod: {SFFoodTrucks.Application, []},
      extra_applications: [:logger, :plug_cowboy]
    ]
  end

  defp deps do
    [
      {:plug_cowboy, "~> 2.0"},
      {:poison, "~> 4.0"}
    ]
  end
end
