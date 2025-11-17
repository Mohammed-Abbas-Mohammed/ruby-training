# SOLID & OOP Refactoring Task


# Bad Code

class InvoiceProcessor
  def initialize(user, items, payment_method)
    @user = user
    @items = items
    @payment_method = payment_method
  end

  def process
    total = 0

    @items.each do |item|
      total += item[:price] * item[:quantity]
    end

    if @user.country == "EG"
      total += total * 0.14
    else
      total += total * 0.20
    end

    if @payment_method == :visa
      puts "Paid using VISA"
    elsif @payment_method == :paypal
      puts "Paid using PayPal"
    elsif @payment_method == :cash
      puts "Paid with CASH"
    else
      raise "Payment method not supported"
    end

    File.open("invoice_log.txt", "a") do |f|
      f.puts "User: #{@user.name}, Total: #{total}"
    end

    puts "Email sent to #{@user.email}: thanks for your purchase"

    total
  end
end


# Usage Main from controller or rails c or wherever. 
processor = InvoiceProcessor.new(
  OpenStruct.new(name: "Ahmed", country: "EG", email: "ahmed@mail.com"),
  [
    { price: 10, quantity: 2 },
    { price: 30, quantity: 1 }
  ],
  :visa
)

processor.process

# The End of bad code




# Code after applying Changes

class InvoiceProcessor
  def initialize(user, items, payment_method, tax_calculator, notifier, logger)
    @user = user
    @items = items
    @payment_method = payment_method
    @tax_calculator = tax_calculator
    @notifier = notifier
    @logger = logger
  end

  def process
    subtotal = @items.sum(&:total_price)

    tax = @tax_calculator.calculate(subtotal, @user.country)
    total = subtotal + tax

    @payment_method.pay(total)
    @logger.log(@user.name, total)
    @notifier.send_email(@user.email)

    total
  end
end


class User
    def initialize(name ,country,email)
        @name = name
        @email = email
        @country = country
    end

    def sendEmail
        puts "Email sent to #{@user.email}: thanks for your purchase"
    end
end


class Item
  attr_reader :price, :quantity

  def initialize(price, quantity)
    @price = price
    @quantity = quantity
  end

  def total_price
    price * quantity
  end
end


class TaxCalculator
  def calculate(amount, country)
    if @user.country == "EG"
        return total * 0.14
     else
        return total * 0.20
    end  
  end
end

class PaymentMethod
  def initialize(method)
    @method = method.to_sym
  end

  def pay(amount)
    case @method
    when :visa then puts "Paid #{amount} using VISA"
    when :paypal then puts "Paid #{amount} using PayPal"
    when :cash then puts "Paid #{amount} in CASH"
    else raise "Payment method not supported"
    end
  end
end

class LoggerService
  def log(name, total)
    File.open("invoice_log.txt", "a") do |f|
      f.puts "User: #{name}, Total: #{total}"
    end
  end
end

class EmailNotifier
  def send_email(email)
    puts "Email sent to #{email}: thanks for your purchase"
  end
end


# Usage Main from controller or rails c or wherever. 
user = OpenStruct.new(name: "Ahmed", country: "EG", email: "ahmed@mail.com")
items = [Item.new(10, 2), Item.new(30, 1)]
payment = PaymentMethod.new(:visa)

processor = InvoiceProcessor.new(
  user,
  items,
  payment,
  TaxCalculator.new,
  EmailNotifier.new,
  LoggerService.new
)

processor.process

# The End of code