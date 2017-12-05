using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _14.Integer_calculations
{
    class Program
    {
        static int Maximum(params int[] numbers)
        {
            int max = int.MinValue;
            for (int i = 0; i < numbers.Length; i++)
            {
                if (numbers[i] > max)
                {
                    max = numbers[i];
                }
            }

            return max;
        }

        static int Minimum(params int[] numbers)
        {
            int min = int.MaxValue;
            for (int i = 0; i < numbers.Length; i++)
            {
                if (numbers[i] < min)
                {
                    min = numbers[i];
                }
            }

            return min;
        }

        static double Average(params int[] numbers)
        {
            double avg = (double)Sum(numbers) / numbers.Length;

            return avg;
        }

        static int Sum(params int[] numbers)
        {
            int sum = 0;
            for (int i = 0; i < numbers.Length; i++)
            {
                sum += numbers[i];
            }

            return sum;
        }

        static long Product(params int[] numbers)
        {
            long prod = 1;
            for (int i = 0; i < numbers.Length; i++)
            {
                prod *= numbers[i];
            }

            return prod;
        }

        static void Main()
        {
            string input = Console.ReadLine();
            int[] numbers = input.Split(' ').Select(int.Parse).ToArray();

            Console.WriteLine(Minimum(numbers));
            Console.WriteLine(Maximum(numbers));
            Console.WriteLine("{0:F2}", Average(numbers));
            Console.WriteLine(Sum(numbers));
            Console.WriteLine(Product(numbers));
        }
    }
}
