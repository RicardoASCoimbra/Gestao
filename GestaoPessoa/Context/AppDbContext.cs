﻿using GestaoPessoa.Models;
using Microsoft.EntityFrameworkCore;


namespace GestaoPessoa.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        public DbSet<Pessoa> Pessoas { get; set; }
       
    }
}
