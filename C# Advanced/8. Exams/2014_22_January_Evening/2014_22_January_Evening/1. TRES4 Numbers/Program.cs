using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _1.TRES4_Numbers
{
    class Program
    {
        static void Main()
        {
            string[] tres4 = { "LON+", "VK-", "*ACAD", "^MIM",
                "ERIK|", "SEY&", "EMY>>", "/TEL", "<<DON", };


            ulong number = ulong.Parse(Console.ReadLine());

            int[] digits = new int[32];
            int digitCount = 0;

            do // adden for the zero test
            {
                digits[digitCount] = (int)(number % 9);
                number /= 9;

                digitCount++;
            }
            while (number > 0);

            for (int i = digitCount - 1; i >= 0; i--)
            {
                Console.Write(tres4[digits[i]]);

            }
            Console.WriteLine();
        }
    }
}
