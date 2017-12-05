using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _1.Magical_numbers
{
    class Program
    {
        static void Main()
        {

            int number = int.Parse(Console.ReadLine());

            decimal firstDigit = (number / 100) % 10;
            decimal secondDigit = (number / 10) % 10;
            decimal thirdDigit = (number / 1) % 10;


            if (secondDigit % 2 == 0)
            {
                Console.WriteLine("{0:F2}", (firstDigit + secondDigit) * thirdDigit);
            }

            if (secondDigit % 2 != 0)
            {
                Console.WriteLine("{0:F2}", (firstDigit * secondDigit) / thirdDigit);
            }
            
        }
    }
}
