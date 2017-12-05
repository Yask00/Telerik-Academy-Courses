using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _1.SquareRoot
{
    class Program
    {
        static void Main()
        {
            try
            {
                var num = double.Parse(Console.ReadLine());
                var sqrt = Math.Sqrt(num).ToString("F3");

                if (sqrt == "NaN")
                {
                    throw new System.FormatException();
                }
                else
                {
                    Console.WriteLine(sqrt);
                }
            }

            catch (System.FormatException)
            {
                Console.WriteLine("Invalid number");
            }

            finally
            {
                Console.WriteLine("Good bye");
            }
        }
    }
}
