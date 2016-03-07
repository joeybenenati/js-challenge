class ContactsController < ApplicationController
  protect_from_forgery
  def index 
    @contacts = Contact.all
  end

  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      render json: @contact
    else
      render json: @contact.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @Contact = Contact.find(params[:id])
    @Contact.destroy
    head :no_content
  end

  def update
    @contact = Contact.find(params[:id])
    if @contact.update(contact_params)
      render json: @contact
    else
      render json: @contact.errors, status: :unprocessable_entity
    end
  end

  private
    def contact_params 
      params.require(:contact).permit(:firstname, :lastname, :dob, :phone, :email, :notes)
    end
  
end
