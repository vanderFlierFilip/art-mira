﻿// <auto-generated />
using System;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Infrastructure.Data.Migrations
{
    [DbContext(typeof(ArtMiraDbContext))]
    [Migration("20210510090133_OrderEntityAdded")]
    partial class OrderEntityAdded
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.5");

            modelBuilder.Entity("Core.Entities.ArtClass", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("Duration")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Info")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<bool>("IsAvailableOnline")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("PictureUrl")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<decimal>("Price")
                        .HasColumnType("decimal(18,3)");

                    b.Property<string>("Schedule")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("ArtClasses");
                });

            modelBuilder.Entity("Core.Entities.ArtCollection", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("PictureUrl")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("ArtCollections");
                });

            modelBuilder.Entity("Core.Entities.Artwork", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("ArtCollectionId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Description")
                        .HasColumnType("TEXT");

                    b.Property<string>("Dimensions")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("TEXT");

                    b.Property<string>("PictureUrl")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("Price")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Technique")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("Year")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("ArtCollectionId");

                    b.ToTable("Artworks");
                });

            modelBuilder.Entity("Core.Entities.OrderAggregate.DeliveryMethod", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("DeliveryTime")
                        .HasColumnType("TEXT");

                    b.Property<string>("Description")
                        .HasColumnType("TEXT");

                    b.Property<decimal>("Price")
                        .HasColumnType("decimal(18,2)");

                    b.Property<string>("ShortName")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("DeliveryMethods");
                });

            modelBuilder.Entity("Core.Entities.OrderAggregate.Order", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("BuyerEmail")
                        .HasColumnType("TEXT");

                    b.Property<int?>("DeliveryMethodId")
                        .HasColumnType("INTEGER");

                    b.Property<DateTimeOffset>("OrderDate")
                        .HasColumnType("TEXT");

                    b.Property<string>("PaymentIntentId")
                        .HasColumnType("TEXT");

                    b.Property<string>("Status")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<decimal>("Subtotal")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("DeliveryMethodId");

                    b.ToTable("Orders");
                });

            modelBuilder.Entity("Core.Entities.OrderAggregate.OrderItem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int?>("OrderId")
                        .HasColumnType("INTEGER");

                    b.Property<decimal>("Price")
                        .HasColumnType("decimal(18,2)");

                    b.HasKey("Id");

                    b.HasIndex("OrderId");

                    b.ToTable("OrderItem");
                });

            modelBuilder.Entity("Core.Entities.Artwork", b =>
                {
                    b.HasOne("Core.Entities.ArtCollection", null)
                        .WithMany("Artworks")
                        .HasForeignKey("ArtCollectionId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Core.Entities.OrderAggregate.Order", b =>
                {
                    b.HasOne("Core.Entities.OrderAggregate.DeliveryMethod", "DeliveryMethod")
                        .WithMany()
                        .HasForeignKey("DeliveryMethodId");

                    b.OwnsOne("Core.Entities.OrderAggregate.Address", "ShipToAddress", b1 =>
                        {
                            b1.Property<int>("OrderId")
                                .HasColumnType("INTEGER");

                            b1.Property<string>("City")
                                .HasColumnType("TEXT");

                            b1.Property<string>("FirstName")
                                .HasColumnType("TEXT");

                            b1.Property<string>("LastName")
                                .HasColumnType("TEXT");

                            b1.Property<string>("State")
                                .HasColumnType("TEXT");

                            b1.Property<string>("Street")
                                .HasColumnType("TEXT");

                            b1.Property<string>("Zipcode")
                                .HasColumnType("TEXT");

                            b1.HasKey("OrderId");

                            b1.ToTable("Orders");

                            b1.WithOwner()
                                .HasForeignKey("OrderId");
                        });

                    b.Navigation("DeliveryMethod");

                    b.Navigation("ShipToAddress");
                });

            modelBuilder.Entity("Core.Entities.OrderAggregate.OrderItem", b =>
                {
                    b.HasOne("Core.Entities.OrderAggregate.Order", null)
                        .WithMany("OrderItems")
                        .HasForeignKey("OrderId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.OwnsOne("Core.Entities.OrderAggregate.ProductItemOrdered", "ItemOrdered", b1 =>
                        {
                            b1.Property<int>("OrderItemId")
                                .HasColumnType("INTEGER");

                            b1.Property<string>("PictureUrl")
                                .HasColumnType("TEXT");

                            b1.Property<int>("ProductItemId")
                                .HasColumnType("INTEGER");

                            b1.Property<string>("ProductName")
                                .HasColumnType("TEXT");

                            b1.HasKey("OrderItemId");

                            b1.ToTable("OrderItem");

                            b1.WithOwner()
                                .HasForeignKey("OrderItemId");
                        });

                    b.Navigation("ItemOrdered");
                });

            modelBuilder.Entity("Core.Entities.ArtCollection", b =>
                {
                    b.Navigation("Artworks");
                });

            modelBuilder.Entity("Core.Entities.OrderAggregate.Order", b =>
                {
                    b.Navigation("OrderItems");
                });
#pragma warning restore 612, 618
        }
    }
}
