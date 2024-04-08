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

      properties = feature['properties']
      geometry = feature['geometry']

      mag = properties['mag']
      place = properties['place']
      time = properties['time']
      url = properties['url']
      tsunami = properties['tsunami']
      magType = properties['magType']
      title = properties['title']
      longitude = geometry['coordinates'][0]
      latitude = geometry['coordinates'][1]

      next if title.nil? || url.nil? || place.nil? || magType.nil? || geometry['coordinates'].nil?
      next if mag < -1.0 || mag > 10.0
      next if latitude < -90.0 || latitude > 90.0
      next if longitude < -180.0 || longitude > 180.0

      Earthquake.create(
        external_id: id,
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
