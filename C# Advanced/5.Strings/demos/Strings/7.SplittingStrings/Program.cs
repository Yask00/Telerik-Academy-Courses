using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _7.SplittingStrings
{
    class Program
    {
        static void Main()
        {
            string listOfBeers = "Amstel, Zagorka, Tuborg, Becks.";

            string[] beers = listOfBeers.Split(' ', ',', '.');

            //string[] beers = listOfBeers.Split(
            //    new char[] {' ', ',', '.'}, 
            //    StringSplitOptions.RemoveEmptyEntries);

            Console.WriteLine("Available beers are:");
            foreach (string beer in beers)
            {
                // Two sequential separators in the input cause
                // presence of empty element in the result
                if (beer != "")
                {
                    Console.WriteLine(beer);
                }
            }
        }
    }
}
