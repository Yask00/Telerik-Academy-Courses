using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _8.NumberAsArray
{
    class Program
    {
        static string SumOfDigits(string num1, string num2)
        {
            StringBuilder result = new StringBuilder();

            int[] digits1 = num1.Split(' ').Select(int.Parse).ToArray();
            int[] digits2 = num2.Split(' ').Select(int.Parse).ToArray();

            int length = Math.Min(digits1.Length, digits2.Length);

            bool rem = false;
            int tempSum = 0;
            for (int i = 0; i < length; i++)
            {
                tempSum = digits1[i] + digits2[i];
                if (rem)
                {
                    tempSum++;
                }
                result.Append((tempSum % 10).ToString() + " ");

                if (tempSum > 9)
                {
                    rem = true;
                }
                else
                {
                    rem = false;
                }
            }

            int maxLength = Math.Max(digits1.Length, digits2.Length);

            for (int i = length; i < maxLength; i++)
            {
                if (digits1.Length > digits2.Length)
                {
                    tempSum = digits1[i];
                    if (rem)
                    {
                        tempSum++;
                    }
                    result.Append((tempSum % 10).ToString() + " ");

                    if (tempSum > 9)
                    {
                        rem = true;
                    }
                    else
                    {
                        rem = false;
                    }
                }
                else
                {
                    tempSum = digits2[i];
                    if (rem)
                    {
                        tempSum++;
                    }
                    result.Append((tempSum % 10).ToString() + " ");

                    if (tempSum > 9)
                    {
                        rem = true;
                    }
                    else
                    {
                        rem = false;
                    }
                }
            }

            string returnValue = result.ToString();
            return returnValue;
        }

        static void Main()
        {
            string inputLengths = Console.ReadLine();
            string n1 = Console.ReadLine();
            string n2 = Console.ReadLine();

            Console.WriteLine(SumOfDigits(n1, n2));
        }
    }
}
