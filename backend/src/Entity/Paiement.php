<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\PaiementRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PaiementRepository::class)]
#[ApiResource]
class Paiement
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $type_infraction = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date_infraction = null;

    #[ORM\Column]
    private ?int $numéro_carte = null;

    #[ORM\Column]
    private ?int $numéro_amendes = null;

    #[ORM\Column]
    private ?int $crypto = null;

    #[ORM\Column]
    private ?int $date_exp_carte = null;

    #[ORM\Column]
    private ?int $montant_amende = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $deta_paiement = null;

    #[ORM\ManyToOne(inversedBy: 'paiement')]
    private ?User $user = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTypeInfraction(): ?string
    {
        return $this->type_infraction;
    }

    public function setTypeInfraction(string $type_infraction): static
    {
        $this->type_infraction = $type_infraction;

        return $this;
    }

    public function getDateInfraction(): ?\DateTimeInterface
    {
        return $this->date_infraction;
    }

    public function setDateInfraction(\DateTimeInterface $date_infraction): static
    {
        $this->date_infraction = $date_infraction;

        return $this;
    }

    public function getNuméroCarte(): ?int
    {
        return $this->numéro_carte;
    }

    public function setNuméroCarte(int $numéro_carte): static
    {
        $this->numéro_carte = $numéro_carte;

        return $this;
    }

    public function getNuméroAmendes(): ?int
    {
        return $this->numéro_amendes;
    }

    public function setNuméroAmendes(int $numéro_amendes): static
    {
        $this->numéro_amendes = $numéro_amendes;

        return $this;
    }

    public function getCrypto(): ?int
    {
        return $this->crypto;
    }

    public function setCrypto(int $crypto): static
    {
        $this->crypto = $crypto;

        return $this;
    }

    public function getDateExpCarte(): ?int
    {
        return $this->date_exp_carte;
    }

    public function setDateExpCarte(int $date_exp_carte): static
    {
        $this->date_exp_carte = $date_exp_carte;

        return $this;
    }

    public function getMontantAmende(): ?int
    {
        return $this->montant_amende;
    }

    public function setMontantAmende(int $montant_amende): static
    {
        $this->montant_amende = $montant_amende;

        return $this;
    }

    public function getDetaPaiement(): ?\DateTimeInterface
    {
        return $this->deta_paiement;
    }

    public function setDetaPaiement(\DateTimeInterface $deta_paiement): static
    {
        $this->deta_paiement = $deta_paiement;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): static
    {
        $this->user = $user;

        return $this;
    }
}
