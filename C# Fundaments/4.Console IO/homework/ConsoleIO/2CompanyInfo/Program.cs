using System;




class Company_Info
{
    static void Main()
    {

        string companyName = (Console.ReadLine());
        string companyAdress = (Console.ReadLine());
        string phoneNumber = (Console.ReadLine());
        string fax = (Console.ReadLine());
        string webSite = (Console.ReadLine());
        string firstName = (Console.ReadLine());
        string lastName = (Console.ReadLine());
        int age = int.Parse(Console.ReadLine());
        string phone = (Console.ReadLine());

        if (fax.CompareTo(string.Empty) == 0)
        {
            fax = "(no fax)";
        }
        Console.WriteLine(companyName);
        Console.WriteLine("Address: {0}", companyAdress);
        Console.WriteLine("Tel. {0}", phoneNumber);
        Console.WriteLine("Fax: {0}", fax);
        Console.WriteLine("Web site: {0}", webSite);
        Console.WriteLine("Manager: {0} {1} (age: {2}, tel. {3})",
            firstName, lastName, age, phone);
    }
}

