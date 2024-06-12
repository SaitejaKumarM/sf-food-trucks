defmodule SFFoodTrucks.FoodTruck do
  @moduledoc """
  Module to represent a food truck.
  """

  defstruct [
    :id, :name, :facility_type, :cnn, :location_description, :address,
    :block_lot, :block, :lot, :permit, :status, :food_items, :x,
    :y, :latitude, :longitude, :schedule, :days_hours, :noise_sent,
    :approved, :received, :prior_permit, :expiration_date, :location,
    :fire_prevention_districts, :police_districts, :supervisor_districts,
    :zip_codes, :neighborhoods_old
  ]

  alias NimbleCSV.RFC4180, as: CSV

  @doc """
  Parse a CSV line into a FoodTruck struct.
  """
  def from_csv(line) do
    parsed_line = CSV.parse_string(line) |> List.first()

    IO.inspect(parsed_line, label: "Parsed CSV line")

    case parsed_line do
      [
        locationid, applicant, facilitytype, cnn, location_description, address,
        block_lot, block, lot, permit, status, food_items, x, y, latitude, longitude,
        schedule, days_hours, noise_sent, approved, received, prior_permit, expiration_date,
        location, fire_prevention_districts, police_districts, supervisor_districts,
        zip_codes, neighborhoods_old
      ] ->
        %SFFoodTrucks.FoodTruck{
          id: locationid,
          name: applicant,
          facility_type: facilitytype,
          cnn: cnn,
          location_description: location_description,
          address: address,
          block_lot: block_lot,
          block: block,
          lot: lot,
          permit: permit,
          status: status,
          food_items: food_items,
          x: parse_float(x),
          y: parse_float(y),
          latitude: parse_float_or_nil(latitude),
          longitude: parse_float_or_nil(longitude),
          schedule: schedule,
          days_hours: days_hours,
          noise_sent: noise_sent,
          approved: approved,
          received: received,
          prior_permit: prior_permit,
          expiration_date: expiration_date,
          location: location,
          fire_prevention_districts: fire_prevention_districts,
          police_districts: police_districts,
          supervisor_districts: supervisor_districts,
          zip_codes: zip_codes,
          neighborhoods_old: neighborhoods_old
        }

      _ ->
        IO.puts("CSV line format is incorrect: #{line}")
        raise RuntimeError, "CSV line format is incorrect"
    end
  end

  defp parse_float(value) do
    case Float.parse(value) do
      {number, _} -> number
      :error -> nil
    end
  end

  defp parse_float_or_nil(value) do
    case Float.parse(value) do
      {number, _} -> number
      :error -> nil
    end
  end

  defp parse_coordinates(coordinate_string) do
    case String.trim(coordinate_string) do
      "" ->
        {nil, nil}

      coordinate_string ->
        case Regex.run(~r/^\(([-+]?[0-9]*\.?[0-9]+),\s*([-+]?[0-9]*\.?[0-9]+)\)$/, coordinate_string) do
          [_, lat_str, lon_str] ->
            {parse_float_or_nil(lat_str), parse_float_or_nil(lon_str)}

          _ ->
            IO.puts("Unable to parse coordinates: #{coordinate_string}")
            {nil, nil}
        end
    end
  end
end
