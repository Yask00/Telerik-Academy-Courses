using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _3.SumOfEvenDivisors
{
    class Program
    {
        static void Main(string[] args)
        {

            int a = int.Parse(Console.ReadLine());
            int b = int.Parse(Console.ReadLine());
            
            int sumOfEvenDividors = 0;
            
            for (int i = a; i <= b; i++)
            {
                for (int j = 2; j <= b; j += 2)
                {
                    if (i % j == 0)
                    {
                        sumOfEvenDividors += j;
                    }
                }
            }
            
            Console.WriteLine(sumOfEvenDividors);

            
            //bool isTrue = 4 % 4 == 0;
            //Console.WriteLine(isTrue);
        }
    }
}
