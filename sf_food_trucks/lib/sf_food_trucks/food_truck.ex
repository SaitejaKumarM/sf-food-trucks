# lib/sf_food_trucks/food_truck.ex

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
    :zip_codes, :neighborhoods
  ]

  @doc """
  Parse a CSV line into a FoodTruck struct.
  """
  def from_csv(line) do
    fields = String.split(line, ",")
    case fields do
      [locationid, applicant, facility_type, cnn, location_description, address,
       block_lot, block, lot, permit, status, food_items, x, y, latitude, longitude,
       schedule, days_hours, noise_sent, approved, received, prior_permit, expiration_date,
       location, fire_prevention_districts, police_districts, supervisor_districts,
       zip_codes, neighborhoods] ->

        %SFFoodTrucks.FoodTruck{
          id: locationid,
          name: applicant,
          facility_type: facility_type,
          cnn: cnn,
          location_description: location_description,
          address: address,
          block_lot: block_lot,
          block: block,
          lot: lot,
          permit: permit,
          status: status,
          food_items: food_items,
          x: String.to_float(x),
          y: String.to_float(y),
          latitude: String.to_float(latitude),
          longitude: String.to_float(longitude),
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
          neighborhoods: neighborhoods
        }

      _ ->
        raise "CSV line format is incorrect"
    end
  end
end
