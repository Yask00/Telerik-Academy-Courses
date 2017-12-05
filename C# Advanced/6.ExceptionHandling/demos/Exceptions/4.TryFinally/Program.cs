using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _4.TryFinally
{
    class Program
    {
        static void PerformTryFinally()
        {
            Console.WriteLine("Code executed before try-finally.");

            try
            {
                Console.Write("Enter a number: ");
                string str = Console.ReadLine();
                int.Parse(str);
                Console.WriteLine("Parsing was successful.");
                return; // Exit from the current method
            }
            catch (FormatException)
            {
                Console.WriteLine("Parsing failed!");
            }
            finally
            {
                Console.WriteLine("This cleanup code is always executed.");
            }

            Console.WriteLine("This code is after the try-finally block.");
        }

        static void Main()
        {
            PerformTryFinally();
        }
    }
}
