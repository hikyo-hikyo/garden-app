class main:
    # class instance variable
    def __init__(self):
        self.advice = ""
        self.advice_dict = {}
    # Collecting user input

    def data_collection(self):
        try:
            season = input(
                "Enter the season, summer or winter: ").strip().lower()
            # Validating user input
            if season not in ["summer", "winter"]:
                raise ValueError(
                    "Invalid season. Please enter 'summer' or 'winter'.")
        # Just in case something goes wrong
        except ValueError as e:
            print(f"Error: {e}")
            exit(1)

        try:
            plant_type = input(
                "Enter the type of plant, flower or vegetable: ").strip().lower()

            if plant_type not in ["flower", "vegetable"]:
                raise ValueError(
                    "Invalid plant type. Please enter 'flower' or 'vegetable'.")

        except ValueError as e:
            print(f"Error: {e}")
            exit(1)
        # Make sure to return the values
        return season, plant_type
    # Adding strings to advice based on user input

    def generate_advice(self, season, plant_type):
        if season == "summer":
            self.advice += "Water your plants regularly and provide some shade.\n"
        elif season == "winter":
            self.advice += "Protect your plants from frost with covers.\n"
        else:
            self.advice += "No advice for this season.\n"

        if plant_type == "flower":
            self.advice += "Use fertiliser to encourage blooms."
        elif plant_type == "vegetable":
            self.advice += "Keep an eye out for pests!"
        else:
            self.advice += "No advice for this type of plant."
        # Make sure to return the advice
        return self.advice
    # Creating a dict key using season and plant type, and storing the advice

    def store_advice(self, season, plant_type, advice):
        key = f"{season}_{plant_type}"
        self.advice_dict[key] = advice
    # Printing all stored advice

    def show_all_advice(self):
        if not self.advice_dict:
            print("No advice stored yet.")
            return
        print("\n=== All Stored Advice ===")
        for key, adv in self.advice_dict.items():
            print(f"{key.replace('_', ' - ')}:")
            print(f"   {adv}")
            print("-" * 40)


# Starting the program and calling the functions
if __name__ == "__main__":
    main = main()
    season, plant_type = main.data_collection()
    advice = main.generate_advice(season, plant_type)
    main.store_advice(season, plant_type, advice)
    print(advice)
    main.show_all_advice()
