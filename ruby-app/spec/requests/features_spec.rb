# spec/requests/features_spec.rb
require 'swagger_helper'

describe 'Features API' do

  path '/api/features' do

    get 'Retrieves features' do
      tags 'Features'
      produces 'application/json'

      parameter name: :'filters[mag_type]', in: :query, type: :array, items: { type: :string }, description: 'Filter results by mag_type. Can be more than one. Possible values: md, ml, ms, mw, me, mi, mb, mlg.'
      parameter name: :page, in: :query, type: :integer, description: 'Page number'
      parameter name: :per_page, in: :query, type: :integer, description: 'Number of results per page. Must be less than or equal to 1000.'

      response '200', 'features found' do
        schema type: :object,
          properties: {
            data: {
              type: :array,
              items: {
                type: :object,
                properties: {
                  id: { type: :integer },
                  type: { type: :string },
                  attributes: {
                    type: :object,
                    properties: {
                      external_id: { type: :string },
                      magnitude: { type: :string },
                      place: { type: :string },
                      time: { type: :integer },
                      tsunami: { type: :boolean },
                      mag_type: { type: :string },
                      title: { type: :string },
                      coordinates: {
                        type: :object,
                        properties: {
                          longitude: { type: :string },
                          latitude: { type: :string }
                        },
                        required: ['longitude', 'latitude']
                      }
                    },
                    required: ['external_id', 'magnitude', 'place', 'time', 'tsunami', 'mag_type', 'title', 'coordinates']
                  },
                  links: {
                    type: :object,
                    properties: {
                      external_url: { type: :string }
                    },
                    required: ['external_url']
                  }
                },
                required: ['id', 'type', 'attributes', 'links']
              }
            },
            pagination: {
              type: :object,
              properties: {
                current_page: { type: :integer },
                total: { type: :integer },
                per_page: { type: :integer }
              },
              required: ['current_page', 'total', 'per_page']
            }
          },
          required: ['data', 'pagination']

        run_test!
      end
    end

    post 'Creates a comment for a feature' do
      tags 'Features'
      consumes 'application/json'
      parameter name: :comment, in: :body, schema: {
        type: :object,
        properties: {
          feature_id: { type: :integer },
          body: { type: :string }
        },
        required: [ 'feature_id', 'body' ]
      }

      response '201', 'comment created' do
        let(:comment) { { feature_id: 1, body: 'Yet another comment!' } }
        run_test!
      end

      response '422', 'invalid request' do
        let(:comment) { { feature_id: 1, body: '' } }
        run_test!
      end
    end
  end
end
