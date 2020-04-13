class CatsController < ApplicationController
    def index
        @cats = Cat.all
    end

    def create
      cat = Cat.create(cat_params)
      if cat.valid?
        render json: cat
      else
      render json: cat.errors, status: :unprocessable_entity
      end

    end

    def update
      @cat = Cat.find(params[:id])
      @cat.update_attributes(cat_params)
      if !@cat.valid?
        render(json: @cat.errors, status: :unprocessable_entity) and return
      end
      render action: :show
    end

    # Handle strong parameters, so we are secure
    def cat_params
      params.require(:cat).permit(:name, :age, :enjoys, :avatar)
    end
end
