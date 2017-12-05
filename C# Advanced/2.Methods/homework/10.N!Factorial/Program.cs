using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Numerics;

namespace _10.N_Factorial
{
    class Program
    {
        static void Main()
        {
            string num = Console.ReadLine();
            int number = int.Parse(string.Join("", num.Split(' ').ToArray()));
            Console.WriteLine(CalculateFactorial(number));
        }

        static BigInteger CalculateFactorial(int num)
        {
            if (num == 0)
            {
                return 1;
            }
            return num * CalculateFactorial(num - 1);
        }
    }
}
