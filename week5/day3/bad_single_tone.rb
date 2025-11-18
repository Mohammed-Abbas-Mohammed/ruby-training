# Our app needs a configuration manager (AppConfig).
# Right now, we can create multiple instances, which breaks consistency.

# Task

# Refactor AppConfig to use Singleton Pattern.

# Only one instance can exist.

# Prevent creating new instances directly (new).

# Prevent cloning or duplicating the instance.

# Use it anywhere in the app without creating multiple objects.

class AppConfig
  def initialize
    @settings = { env: "production" }
  end

  def self.instance
    new   # WRONG: creates new object every time
  end

  def [](key)
    @settings[key]
  end
end

c1 = AppConfig.instance
c2 = AppConfig.instance

puts c1.object_id == c2.object_id  # false 🤦‍♂️



# After Refactoring

class AppConfig

 @instance = new 
 private_class_method :new
 
  def initialize
    @settings = { env: "production" }
  end

  def self.instance
    @instance
  end

  def clone
    raise "Cannot clone a singleton instance"
  end

  def dup
    raise "Cannot duplicate a singleton instance"
  end

  def [](key)
    @settings[key]
  end
end

