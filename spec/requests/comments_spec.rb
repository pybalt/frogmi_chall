# spec/requests/comments_spec.rb
require 'swagger_helper'

describe 'Comments API' do

  path '/api/features' do

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
