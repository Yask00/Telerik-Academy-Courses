using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Numerics;

namespace _3.SaddyKopper
{
    class Program
    {
        static void Main()
        {

            string input = "123456789";
            int transitionCount = 0;

            while (input.Length > 1 && transitionCount < 10)
            {
                BigInteger product = 1;

                while (input.Length > 0)
                {
                    input = input.Substring(0, input.Length - 1);

                    int sum = 0;

                    for (int i = 0; i < input.Length; i+=2)
                    {
                        sum += (input[i] - '0');
                    }

                       product *= sum != 0 ? sum : 1;
                }

                transitionCount++;
                input = product.ToString();
            }

            //output
            if (transitionCount < 10)
            {
                Console.WriteLine(transitionCount);
            }

            Console.WriteLine(input);
        }
    }
}
