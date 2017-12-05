using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _5.OptionalParameters
{
    class Program
    {
        static void PrintNumbers(int start = 0, int end = 20)
        {
            for (int i = start; i <= end; i++)
            {
                Console.Write("{0} ", i);
            }
            Console.WriteLine();
        }

        static void Main()
        {
            PrintNumbers(5, 10);
            PrintNumbers(15);
            PrintNumbers();
            PrintNumbers(end: 40, start: 35);
        }

    }
}
