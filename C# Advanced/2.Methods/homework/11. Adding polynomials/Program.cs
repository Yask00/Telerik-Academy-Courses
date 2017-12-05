using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _11.Adding_polynomials
{
    class Program
    {
        static int[] AddPolynomials(int[] pol1, int[] pol2)
        {
            int[] sum = new int[pol1.Length];

            for (int i = 0; i < pol1.Length; i++)
            {
                sum[i] = pol1[i] + pol2[i];
            }

            return sum;
        }

        static void Main()
        {
            int n = int.Parse(Console.ReadLine());
            string input1 = Console.ReadLine();
            string input2 = Console.ReadLine();

            int[] pol1 = input1.Split(' ').Select(int.Parse).ToArray();
            int[] pol2 = input2.Split(' ').Select(int.Parse).ToArray();

            int[] result = AddPolynomials(pol1, pol2);

            Console.WriteLine(string.Join(" ", result));
        }
    }
}
