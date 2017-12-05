using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _6.Temperatue
{
    class Program
    {
        static double FahrenheitToCelsius(double degrees)
        {
            double celsius = (degrees - 32) * 5 / 9;
            return celsius;
        }

        static void Main()
        {
            Console.WriteLine("Enter your body temperature in Fahrenheit degrees: ");
            double temperature = Double.Parse(Console.ReadLine());

            temperature = FahrenheitToCelsius(temperature);

            Console.WriteLine("Your body temperature in Celsius degrees is {0}.", temperature);

            if (temperature >= 37)
            {
                Console.WriteLine("You are ill!");
            }
        }

    }
}
