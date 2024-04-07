namespace :earthquakes do
  desc "Fetch earthquake data"
  task fetch: :environment do
    require 'net/http'
    require 'json'

    url = URI('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson')
    response = Net::HTTP.get(url)
    data = JSON.parse(response)

    data['features'].each do |feature|
      id = feature['id']
      next if Earthquake.exists?(id: id)

      Earthquake.create(
        id: id,
        mag: feature['properties']['mag'],
        place: feature['properties']['place'],
        time: feature['properties']['time'],
        url: feature['properties']['url'],
        tsunami: feature['properties']['tsunami'],
        magType: feature['properties']['magType'],
        title: feature['properties']['title'],
        longitude: feature['geometry']['coordinates'][0],
        latitude: feature['geometry']['coordinates'][1]
      )
    end
  end
end
