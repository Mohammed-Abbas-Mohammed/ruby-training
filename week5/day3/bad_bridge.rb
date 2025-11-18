# Our app sends notifications. Right now, all types (email, SMS, push) are in one class with many if/else.
# This makes it hard to add new notification types or sending methods.

# Task

# Refactor the notification system using Bridge Pattern.

# Separate notification type (abstraction) from sending method (implementation).

# Add at least 3 sending methods (Email, SMS, Push).

# Make it easy to add new types or methods without changing existing code.

# No if/else in the main notification logic.

class Notification
  def initialize(type)
    @type = type
  end

  def send(message)
    if @type == :email
      puts "Sending Email: #{message}"
    elsif @type == :sms
      puts "Sending SMS: #{message}"
    elsif @type == :push
      puts "Sending Push: #{message}"
    end
  end
end

notif = Notification.new(:email)
notif.send("Hello World")


#After Refactoring

class Notification
  def initialize(type)
    @type = type
  end

  def send(message)
    @type.send_message(message)
  end
end


class Sender
  def send_message(message)
    raise NotImplementedError
  end
end

class EmailSender < Sender
  def send_message(message)
    puts "Email sent: #{message}"
  end
end

class SmsSender < Sender
  def send_message(message)
    puts "SMS sent: #{message}"
  end
end

class PushSender < Sender
  def send_message(message)
    puts "Push notification: #{message}"
  end
end

notif = Notification.new(:email)
notif.send("Hello World")
