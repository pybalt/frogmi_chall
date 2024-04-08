# app/controllers/api/earthquakes_controller.rb

module Api
  class EarthquakesController < ApplicationController

    def index
      page = params[:page] || 1
      per_page = params[:per_page].to_i > 0 ? [params[:per_page].to_i, 1000].min : 10
      mag_types = params[:filters]&.fetch(:mag_type, [])&.split(',')

      @earthquakes = Earthquake.order(:id)
      @earthquakes = @earthquakes.where(magType: mag_types) if mag_types.present?
      @earthquakes = @earthquakes.page(page).per(per_page)

      render json: {
        data: @earthquakes.map do |earthquake|
          {
            id: earthquake.id,
            type: 'feature',
            attributes: {
              external_id: earthquake.external_id,
              magnitude: earthquake.mag,
              place: earthquake.place,
              time: earthquake.time,
              tsunami: earthquake.tsunami,
              mag_type: earthquake.magType,
              title: earthquake.title,
              coordinates: {
                longitude: earthquake.longitude,
                latitude: earthquake.latitude
              }
            },
            links: {
              external_url: earthquake.url
            }
          }
        end,
        pagination: {
          current_page: page.to_i,
          total: @earthquakes.total_count,
          per_page: per_page.to_i
        }
      }
    end

    def create
      @earthquake = Earthquake.find(params[:feature_id])
      @comment = @earthquake.comments.build(comment_params)

      if @comment.save
        render json: { status: 'success', data: @comment }, status: :created
      else
        render json: { status: 'error', errors: @comment.errors }, status: :unprocessable_entity
      end
    end

    private

    def comment_params
      params.require(:comment).permit(:body)
    end

    def options
      head :ok
    end
  end
end
