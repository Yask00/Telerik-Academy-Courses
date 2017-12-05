using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _1.HandlingExceptions
{
    class Program
    {
        static void Main(string[] args)
        {
            string s = Console.ReadLine();
            try
            {
                int.Parse(s);
                Console.WriteLine("You entered valid Int32 number {0}.", s);
            }
            catch (FormatException)
            {
                Console.WriteLine("Invalid integer number!");
            }
            catch (OverflowException)
            {
                Console.WriteLine("The number is too big to fit in Int32!");
            }
        }
    }
}
