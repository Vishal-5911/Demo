import calendar

# Ask the user to enter the year and month
year = int(input("Enter the year: "))
month = int(input("Enter the month (1-12): "))

# Display the calendar
print(calendar.month(year, month))
