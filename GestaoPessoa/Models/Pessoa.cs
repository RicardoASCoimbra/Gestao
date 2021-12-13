using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GestaoPessoa.Models
{
    [Table("Pessoas")]
    public class Pessoa
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        [StringLength(100)]
        public string? Usuario { get; set; }

        [Required]
        [StringLength(200)]
        public string? Nome{ get; set; }

        [Required]
        [EmailAddress]
        [StringLength(200)]
        public string? Email { get; set; }

        [Required]
        public DateTime? DataNasc { get; set; }

        [Required]
        public bool Ativo { get; set; }

        [Required]
        [StringLength(20)]
        public string? Cep { get; set; }
      
        [StringLength(200)]
        public string? Logradouro { get; set; }

        [StringLength(200)]
        public string? Bairro { get; set; }

        [StringLength(200)]
        public string? Cidade { get; set; }

        [StringLength(200)]
        public string? Estado { get; set; }

        [StringLength(200)]
        public string? Pais { get; set; }

        [Required]
        [StringLength(50)]
        public string Funcao { get; set; }

        public bool Excluido { get; set; }

        public Pessoa() { }
        public Pessoa(
            Guid id, 
            string? usuario, 
            string? nome,
            string? email,
            DateTime? dataNasc, 
            bool ativo,
            string cep,
            string? logradouro, 
            string? bairro, 
            string? cidade,
            string? estado,
            string? pais,
            string? funcao)
        {
            Id = id;
            Usuario = usuario;
            Nome = nome;
            Email = email;
            DataNasc = dataNasc;
            Ativo = ativo;
            Cep = cep;
            Logradouro = logradouro;
            Bairro = bairro;
            Cidade = cidade;
            Estado = estado;
            Pais = pais;
            Funcao = funcao;
            Excluido = false;
        }

        public void SetDados(
            string? usuario,
            string? nome,
            string? email,
            DateTime? dataNasc,
            bool ativo,
            string cep,
            string? logradouro,
            string? bairro,
            string? cidade,
            string? estado,
            string? pais,
            string? funcao)
        {            
            Usuario = usuario;
            Nome = nome;
            Email = email;
            DataNasc = dataNasc;
            Ativo = ativo;
            Cep = cep;
            Logradouro = logradouro;
            Bairro = bairro;
            Cidade = cidade;
            Estado = estado;
            Pais = pais;
            Funcao = funcao;
            Excluido = false;
        }

        public void SetExcluido(bool flag)
        {
            Excluido = flag;
        }

    }
}
